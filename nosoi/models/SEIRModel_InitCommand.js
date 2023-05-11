//--------------------------------------------------------------------------------------------------
let graph = simulationEngine.GetGraph();
let globalBlackboard = this.simulationEngine.GetBlackboard();

//--------------------------------------------------------------------------------------------------
//class MarkovModule {
//    constructor(SimAgent) {
//        this.simAgent = SimAgent;
//    }
//}

class Source {
    constructor(SimAgentSource) {
        this.simAgent = SimAgentSource;
    }

    get asString()          { return this.agentBlackboard.GetAsString(); }
    get asJSON()            { return JSON.parse(this.asString); }
    get agentBlackboard()   { return this.simAgent.GetAgentBlackboard(); }
    get name()              { return this.agentBlackboard.GetString("name", "UNNAMED SOURCE"); }
    set name(newName)       { return this.agentBlackboard.SetString("name", newName); }
    get pool()              { return this.agentBlackboard.GetFloat("pool", 0.0); }
    set pool(newPool)       { this.agentBlackboard.SetFloat("pool", newPool); }
    get connectors() {
        if (!this.agentBlackboard.HasKey("OutConnectors")) { return []; }
        let connectorObjectArray = [];
        let myJSONState = JSON.parse(this.agentBlackboard.GetAsString());
        for (let i = 0; i < myJSONState.OutConnectors.length; i++) {
            let connectorAgent = graph.GetAgentWithKeyValuePair("name", myJSONState.OutConnectors[i].name);
            let connectorObj = GetAgentTypeObject(connectorAgent);
            connectorObjectArray.push(connectorObj);
        }
        return connectorObjectArray;
    }

    AddConnectorName(connName) { // OPTIMIZE LATER
        let index = this.connectors.length;
        this.agentBlackboard.SetString("/OutConnectors/" + index + "/name", connName);
    }

    SendPool() {
        this.Send();
    }

    Send() {
        let connectors = this.connectors;
        for (let c = 0; c < this.connectors.length; c++) {
            connectors[c].Transition(this.pool);
        }

        globalBlackboard.SetFloat(this.name, this.pool);
    }

    GetReading() {
        return this.pool;
    }
}

class Splitter {
    constructor(SimAgentSplitter) {
        this.simAgent = SimAgentSplitter;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED SPLITTER"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get pool() { return this.agentBlackboard.GetFloat("pool", 0.0); }
    set pool(newPool) { this.agentBlackboard.SetFloat("pool", newPool); }
    get connectors() {
        if (!this.agentBlackboard.HasKey("OutConnectors")) { return []; }
        let connectorObjectArray = [];
        let myJSONState = JSON.parse(this.agentBlackboard.GetAsString());
        for (let i = 0; i < myJSONState.OutConnectors.length; i++) {
            let connectorAgent = graph.GetAgentWithKeyValuePair("name", myJSONState.OutConnectors[i].name);
            let connectorObj = GetAgentTypeObject(connectorAgent);
            connectorObjectArray.push(connectorObj);
        }
        return connectorObjectArray;
    }

    AddConnectorName(connName) { // OPTIMIZE LATER
        let index = this.connectors.length;
        this.agentBlackboard.SetString("/OutConnectors/" + index + "/name", connName);
    }

    Receive(value) {
        this.pool += value;
        this.Send();
    }

    Send() {
        let connectors = this.connectors;
        connectors.sort((connA, connB) => { return (connA.probability < connB.probability ? -1 : 0) });
        // TODO: Include special code from when any probabilities less than 1.0

        for (let c = 0; c < connectors.length; c++) {
            if (this.pool > 0.0) {
                let probability = connectors[c].probability;
                let output = CalculateTransitionCount(this.pool, probability);
                connectors[c].Transition(output);
                this.pool -= output;
            }
            else {
                connectors[c].Transition(0.0);
            }
        }

        this.pool = 0.0;
    }
}

class Sink {
    constructor(SimAgentSink) {
        this.simAgent = SimAgentSink;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED SINK"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get pool() { return this.agentBlackboard.GetFloat("pool", 0.0); }
    set pool(newPool) { this.agentBlackboard.SetFloat("pool", newPool); }
    get lastValue() { return this.agentBlackboard.GetFloat("lastValue", 0.0); }
    set lastValue(newLastValue) { this.agentBlackboard.SetFloat("lastValue", newLastValue); }
    get connectors() {
        if (!this.agentBlackboard.HasKey("OutConnectors")) { return []; }
        let connectorObjectArray = [];
        let myJSONState = JSON.parse(this.agentBlackboard.GetAsString());
        for (let i = 0; i < myJSONState.OutConnectors.length; i++) {
            let connectorAgent = graph.GetAgentWithKeyValuePair("name", myJSONState.OutConnectors[i].name);
            let connectorObj = GetAgentTypeObject(connectorAgent);
            connectorObjectArray.push(connectorObj);
        }
        return connectorObjectArray;
    }

    CleanUp() {
        this.lastValue = this.pool;
        globalBlackboard.SetFloat(this.name, this.pool);
        this.pool = 0.0;
    }

    Receive(value) {
        this.pool += value;
    }

    GetReading() {
        return this.lastValue;
    }
}

class Node {
    constructor(SimAgentNode) {
        this.simAgent = SimAgentNode;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED NODE"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get pool() { return this.agentBlackboard.GetFloat("pool", 0.0); }
    set pool(newPool) { this.agentBlackboard.SetFloat("pool", newPool); }
    get incoming() { return this.agentBlackboard.GetFloat("incoming", 0.0); }
    set incoming(newIncoming) { this.agentBlackboard.SetFloat("incoming", newIncoming); }
    get connector() {
        if (!this.agentBlackboard.HasKey("OutConnector")) { return null; }
        let connectorName = this.agentBlackboard.GetString("OutConnector", "UNNAMED");
        let connectorAgent = graph.GetAgentWithKeyValuePair("name", connectorName);
        let connectorObj = GetAgentTypeObject(connectorAgent);
        return connectorObj;
    }
    set connectorName(name) { this.agentBlackboard.SetString("OutConnector", name); }

    CleanUp() {
        this.pool = this.incoming;
        this.incoming = 0.0
        globalBlackboard.SetFloat(this.name, this.pool);
    }

    Receive(value) {
        this.incoming += value;
    }

    Pump(value) {
        let amount = Math.min(value, this.pool)
        this.pool -= amount;
        return amount;
    }

    SendPool() {
        this.Send();
    }

    Send() {
        let connector = this.connector;
        if (!connector) {
            this.incoming += this.pool;
        }
        else {
            connector.Transition(this.pool);
            this.pool = 0.0;
        }
    }

    GetReading() {
        return this.pool;
    }
}

class Pump {
    constructor(SimAgentPump) {
        this.simAgent = SimAgentPump;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED PUMP"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get pool() { return this.agentBlackboard.GetFloat("pool", 0.0); }
    set pool(newPool) { this.agentBlackboard.SetFloat("pool", newPool); }
    get signal() { return this.agentBlackboard.GetFloat("signal", 0.0); }
    set signal(newSignal) { this.agentBlackboard.SetFloat("signal", newSignal); }
    set connectorName(name) { this.agentBlackboard.SetString("OutConnector", name); }
    get connector() {
        if (!this.agentBlackboard.HasKey("OutConnector")) { return null; }
        let connectorName = this.agentBlackboard.GetString("OutConnector", "UNNAMED");
        let connectorAgent = graph.GetAgentWithKeyValuePair("name", connectorName);
        let connectorObj = GetAgentTypeObject(connectorAgent);
        return connectorObj;
    }
    get pumpSource() {
        if (!this.agentBlackboard.HasKey("PumpSource")) { return null; }
        let pumpSourceName = this.agentBlackboard.GetString("PumpSource", "DOES NOT EXIST");
        let pumpSourceAgent = graph.GetAgentWithKeyValuePair("name", pumpSourceName);
        let pumpSourceObj = GetAgentTypeObject(pumpSourceAgent);
        return pumpSourceObj;
    }

    set pumpSourceName(name) { this.agentBlackboard.SetString("PumpSource", name); }

    CleanUp() { }

    Send() {
        let connector = this.connector;
        if (connector) {
            connector.Transition(this.pool);
            this.pool = 0.0;
        }
    }

    PumpFromSource() {
        this.pool = this.pumpSource.Pump(this.signal);
        this.Send();
    }

    Receive(value) {
        this.signal = value;
        this.PumpFromSource();
    }
}

class Connector {
    constructor(SimAgentConnector) {
        this.simAgent = SimAgentConnector;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED Connector"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }

    get receiverName() { return this.agentBlackboard.GetString("receiver", "UNNAMED"); }
    set receiverName(name) { return this.agentBlackboard.SetString("receiver", name); }
    get receiverAgent() { return graph.GetAgentWithKeyValuePair("name", this.receiverName); }
    get receiver() { return GetAgentTypeObject(this.receiverAgent); }

    get probability() { return this.agentBlackboard.GetFloat("probability", 1.0); }

    set probability(value) { this.agentBlackboard.SetFloat("probability", value); }
    get baselineProbability() { return this.agentBlackboard.GetFloat("baselineProbability", 1.0); }
    set baselineProbability(value) { this.agentBlackboard.SetFloat("baselineProbability", value); }
    get isClamped() { return this.agentBlackboard.GetBool("clamped", true); }
    get flowMeter() { return this.agentBlackboard.GetFloat("flowMeter", 0.0); }
    set flowMeter(val) { return this.agentBlackboard.SetFloat("flowMeter", val); }

    Transition(value) {
        this.flowMeter = value;
        //globalBlackboard.SetFloat(this.name, value); // Save Transition Val history
        //globalBlackboard.SetFloat(this.name, this.probability); // Save probability history

        let receiver = this.receiver
        if (receiver) {
            receiver.Receive(value);
        }
    }

    CleanUp() {
        // Should be clamped and reset properly at startup, not guarenteed right now
        this.ResetProbabilities();
        if (this.isClamped) {
            this.ClampProbabilities()
        }
    }

    AdjustProbability(updatedProb, adjustBaseline = false) {
        this.probability = updatedProb;
        if (adjustBaseline) {
            this.baselineProbability = updatedProb;
        }
    }

    GetReading() {
        return this.flowMeter;
    }

    ClampProbabilities() {
        this.baselineProbability = ClampZeroToOne(this.baselineProbability);
        this.probability = ClampZeroToOne(this.probability);
    }

    ResetProbabilities() {
        this.probability = this.baselineProbability;
    }
}

class Sensor {
    constructor(SimAgentSensor) {
        this.simAgent = SimAgentSensor;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get reading() { return this.agentBlackboard.GetFloat("reading", 0.0); }
    set reading(val) { this.agentBlackboard.SetFloat("reading", val); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED SENSOR"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get connectors() {
        if (!this.agentBlackboard.HasKey("OutConnectors")) { return []; }
        let connectorObjectArray = [];
        let myJSONState = JSON.parse(this.agentBlackboard.GetAsString());
        for (let i = 0; i < myJSONState.OutConnectors.length; i++) {
            let connectorAgent = graph.GetAgentWithKeyValuePair("name", myJSONState.OutConnectors[i].name);
            let connectorObj = GetAgentTypeObject(connectorAgent);
            connectorObjectArray.push(connectorObj);
        }
        return connectorObjectArray;
    }
    get monitoredObj() {
        if (!this.agentBlackboard.HasKey("monitoredObj")) { return null; }
        let monitoredObjName = this.agentBlackboard.GetString("monitoredObj", "UNNAMED");
        let monitoredObjAgent = graph.GetAgentWithKeyValuePair("name", monitoredObjName);
        let monitoredObj = GetAgentTypeObject(monitoredObjAgent);
        return monitoredObj;
    }
    set monitoredObjName(name) { this.agentBlackboard.SetString("monitoredObj", name); }

    AddConnectorName(connName) { // OPTIMIZE LATER
        let index = this.connectors.length;
        this.agentBlackboard.SetString("/OutConnectors/" + index + "/name", connName);
    }

    SendReading() {
        this.Send();
    }

    TakeReading() {
        this.reading = this.monitoredObj.GetReading();
        globalBlackboard.SetFloat(this.name, this.reading); // Save Reading history
    }

    Send() {
        let connectors = this.connectors;
        for (let c = 0; c < this.connectors.length; c++) {
            connectors[c].Transition(this.reading);
        }
    }
}

class Adjuster {
    constructor(SimAgentAdjuster) {
        this.simAgent = SimAgentAdjuster;
    }

    get asString() { return this.agentBlackboard.GetAsString(); }
    get asJSON() { return JSON.parse(this.asString); }
    get agentBlackboard() { return this.simAgent.GetAgentBlackboard(); }
    get name() { return this.agentBlackboard.GetString("name", "UNNAMED Adjuster"); }
    set name(newName) { return this.agentBlackboard.SetString("name", newName); }
    get adjustableConnector() {
        let connectorName = this.agentBlackboard.GetString("AdjustableConnector", "UNNAMED");
        let connectorAgent = graph.GetAgentWithKeyValuePair("name", connectorName);
        let connectorObj = GetAgentTypeObject(connectorAgent);
        return connectorObj;
    }
    get adjustBaselineProbability() { return this.agentBlackboard.GetBool("adjustBaselineProbability", false); }
    get signal() { return this.agentBlackboard.GetFloat("signal", false); }
    set signal(val) { return this.agentBlackboard.SetFloat("signal", val); }
    get adjustedProbability() { return this.agentBlackboard.GetFloat("adjustedProbability", false); }

    CleanUp() {
        // Add Adjusted Probability to History
        this.signal = 0.0;
    }

    Receive(val) {
        Adjust(val);
    }

    Adjust(val) {
        this.signal = val;
        // TODO
        //this.adjustedProbability = adjustmentFunction.Adjust(signal);
        var priorProb = this.adjustableConnector.probability;
        // TODO
        //switch (adjustmentType) {
        //    case AdjustmentType.Replace:
        //        break;
        //    case AdjustmentType.Sum:
        //        adjustedProbability += priorProb;
        //        break;
        //    case AdjustmentType.Multiply:
        //        adjustedProbability *= priorProb;
        //        break;
        //    case AdjustmentType.Divide:
        //        if (adjustedProbability != 0f)
        //        {
        //            adjustedProbability = priorProb / adjustedProbability;
        //        }
        //        break;
        //    default:
        //        throw new ArgumentOutOfRangeException();
        //}
        adjustableConnector.AdjustProbability(adjustedProbability, adjustBaselineProbability);
    }
}

//--------------------------------------------------------------------------------------------------
// Math Utilities
//--------------------------------------------------------------------------------------------------
function CalculateTransitionCount(pool, transProb) {
    const tolerance = Number.MIN_VALUE;

    // Return entire pool transtion prob near 1.0
    if (Math.abs(transProb - 1.0) < tolerance) {
        return pool;
    }

    //  If transition prob is greater than 1.0, take fractional part
    // Increase pool by input pool times non-fractional part
    let transCount = 0.0;
    if (transProb > 1.0) {
        let mult = Math.trunc(transProb);
        transCount = pool * mult;
        transProb -= mult;
    }

    // Transition each member of pool on if fall within transition probability
    let poolInt = Math.trunc(pool);
    let poolDeci = pool - poolInt;

    // Simple Monte Carlo Transform
    for (let i = 0; i < poolInt; i++) {
        if (Math.random() < transProb) {
            transCount++;
        }
    }

    // If input pool is fractional, transition fractional part based on transition probability
    if (!(poolDeci > 0.0)) { return transCount; }
    if (Math.random() < transProb) {
        transCount += poolDeci;
    }
    return transCount;
}

function ClampZeroToOne(value) {
    return Math.min(Math.max(value, 0.0), 1.0);
}

//--------------------------------------------------------------------------------------------------
// Type Utilities
//--------------------------------------------------------------------------------------------------
function GetAgentTypeObject(simAgent) {
    if (!simAgent) { return null; }
    let agentBlackboard = simAgent.GetAgentBlackboard();
    let type = agentBlackboard.GetString("type", "DOES NOT EXIST");
    if      (type == "Node") { return new Node(simAgent) } 
    else if (type == "Sink") { return new Sink(simAgent); }
    else if (type == "Source") { return new Source(simAgent); }
    else if (type == "Splitter") { return new Splitter(simAgent); }
    else if (type == "Connector") { return new Connector(simAgent); }
    else if (type == "Pump") { return new Pump(simAgent); }
    else if (type == "Sensor") { return new Sensor(simAgent); }
    else if (type == "Adjuster") { return new Adjuster(simAgent); }
    else { return null; }
}

//--------------------------------------------------------------------------------------------------
this.simulationEngine.globalFunctions =
{
    "agentClasses" : {
        "Node": Node,
        "Source": Source,
        "Sink": Sink,
        "Connector": Connector,
        "Splitter": Splitter,
        "Pump": Pump,
        "Sensor": Sensor,
        "Adjuster": Adjuster,
    },

    "ClampZeroToOne": ClampZeroToOne,
    "CalculateTransitionCount": CalculateTransitionCount,
    "GetAgentTypeObject": GetAgentTypeObject,
};

//--------------------------------------------------------------------------------------------------
// Engine Improvements
// - Getting and Setting Arrays on the Blackboard
// - Get and fetch nodes by id reference specific to the graph (salted)

//--------------------------------------------------------------------------------------------------
let exposedSource = CreateSource("ExposedSource", 0.0)
let exposedNode =   CreateNode("Exposed")
//exposedNode.pool = 1_000_000.0;
exposedNode.pool = 1.0;

let exposedSplitter =                   CreateSplitter("ExposedSplitter");
//let infectiousSink =                    CreateSink("InfectiousSink")

let exposedSourceToExposed =            CreateConnector("ExposedSourceToExposed", 1.0);
let exposedToExposedSplitter =          CreateConnector("ExposedToExposedSplitter", 1.0);
let exposedSplitterToExposed =          CreateConnector("ExposedSplitterToExposed", 1.0);
//let exposedSplitterToInfectiousSink =   CreateConnector("ExposedSplitterToInfectiousSink", 0.2);

MakeConnection(exposedNode,      exposedToExposedSplitter,           exposedSplitter);
MakeConnection(exposedSource,    exposedSourceToExposed,             exposedNode);
//MakeConnection(exposedSplitter,  exposedSplitterToInfectiousSink,    infectiousSink);
MakeConnection(exposedSplitter, exposedSplitterToExposed, exposedNode);

//--------------------------------------------------------------------------------------------------
// Infectious Type Splits
//--------------------------------------------------------------------------------------------------

let exposedSplitToInfectiousSplit = CreateConnector("ExposedSplitToInfectiousSplit", 0.1666667)

let infectiousGainSensor = CreateSensor("NetGainInfectious")
infectiousGainSensor.monitoredObjName = exposedSplitToInfectiousSplit.name;

let infectiousSplit = CreateSplitter("InfectiousSplit")

let infectiousSplitToHospitalizedStatusSplit = CreateConnector("InfectiousSplitToHospitalizedStatusSplit", 0.0022)
let infectiousSplitToNonHospitalizedSplit = CreateConnector("InfectiousSplitToNonHospitalizedSplit", 1.0)

let hospitalizedStatusSplit = CreateSplitter("HospitalizedStatusSplit")
let nonHospitalizedSplit = CreateSplitter("NonHospitalizedSplit")

let hospitalizedStatusSplitToCritical = CreateConnector("HospitalizedStatusSplitToCritical", 0.001) // 0.001
let hospitalizedStatusSplitToHospitalized = CreateConnector("HospitalizedStatusSplitToHospitalized", 1.0)

let nonHospitalizedSplitToAsymptomatic = CreateConnector("NonHospitalizedSplitToAsymptomatic", 0.8382)
let nonHospitalizedSplitToSymptomatic = CreateConnector("NonHospitalizedSplitToSymptomatic", 1.0)

let asympGainSensor = CreateSensor("NetGainAsymptomatic");
asympGainSensor.monitoredObjName = nonHospitalizedSplitToAsymptomatic.name;

let sympGainSensor = CreateSensor("NetGainSymptomatic");
sympGainSensor.monitoredObjName = nonHospitalizedSplitToSymptomatic.name;

let criticalGainSensor = CreateSensor("NetGainCritical");
criticalGainSensor.monitoredObjName = hospitalizedStatusSplitToCritical.name;

let hospGainSensor = CreateSensor("NetGainHospitalized");
hospGainSensor.monitoredObjName = hospitalizedStatusSplitToHospitalized.name;

let symptomaticNode =   CreateNode("Symptomatic");
let asymptomaticNode =  CreateNode("Asymptomatic");
let hospitalizedNode =  CreateNode("Hospitalized");
let criticalNode =      CreateNode("Critical");

MakeConnection(exposedSplitter, exposedSplitToInfectiousSplit, infectiousSplit);

MakeConnection(infectiousSplit, infectiousSplitToHospitalizedStatusSplit, hospitalizedStatusSplit);
MakeConnection(infectiousSplit, infectiousSplitToNonHospitalizedSplit, nonHospitalizedSplit);

MakeConnection(hospitalizedStatusSplit, hospitalizedStatusSplitToCritical, criticalNode);
MakeConnection(hospitalizedStatusSplit, hospitalizedStatusSplitToHospitalized, hospitalizedNode);
MakeConnection(nonHospitalizedSplit, nonHospitalizedSplitToAsymptomatic, asymptomaticNode);
MakeConnection(nonHospitalizedSplit, nonHospitalizedSplitToSymptomatic, symptomaticNode);

//--------------------------------------------------------------------------------------------------
//-- Critical Case Loop -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

let deceasedNode = CreateNode("Deceased")
let recoveredNode = CreateNode("Recovered")

let criticalSplit = CreateSplitter("CriticalSplit");
let postCriticalSplit = CreateSplitter("PostCriticalSplit");

let criticalToCriticalSplit = CreateConnector("CriticalToCriticalSplit", 1.0)

let criticalSplitToPostCriticalSplit = CreateConnector("CriticalSplitToPostCriticalSplit", 0.1) // 0.1
let criticalSplitToCritical = CreateConnector("CriticalSplitToCritical", 1.0)

let postCriticalSplitToDeceased = CreateConnector("PostCriticalSplitToDeceased", 0.25) //5.6e-06
let postCriticalSplitToRecovered = CreateConnector("PostCriticalSplitToRecovered", 1.0)

MakeConnection(criticalNode, criticalToCriticalSplit, criticalSplit);

MakeConnection(criticalSplit, criticalSplitToPostCriticalSplit, postCriticalSplit);
MakeConnection(criticalSplit, criticalSplitToCritical, criticalNode);

MakeConnection(postCriticalSplit, postCriticalSplitToRecovered, recoveredNode);
MakeConnection(postCriticalSplit, postCriticalSplitToDeceased, deceasedNode);

//--------------------------------------------------------------------------------------------------
//-- Hospitalized Case Loop -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
let hospitalizedSplit = CreateSplitter("HospitalizedSplit");

let hospitalizedToHospitalizedSplit = CreateConnector("HospitalizedToHospitalizedSplit", 1.0)

let hospitalizedSplitToRecovered = CreateConnector("HospitalizedSplitToRecovered", 0.1); //0.1428571)
let hospitalizedSplitToHospitalized = CreateConnector("HospitalizedSplitToHospitalized", 1.0)

MakeConnection(hospitalizedNode, hospitalizedToHospitalizedSplit, hospitalizedSplit);
MakeConnection(hospitalizedSplit, hospitalizedSplitToRecovered, recoveredNode);
MakeConnection(hospitalizedSplit, hospitalizedSplitToHospitalized, hospitalizedNode);

//--------------------------------------------------------------------------------------------------
//-- Asymptomatic Case Loop -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
let asymptomaticSplit = CreateSplitter("AsymptomaticSplit");

let asymptomaticToAysymptomaticSplit = CreateConnector("AsymptomaticToAsymptomaticSplit", 1.0)

let asymptomaticSplitToRecovered = CreateConnector("asymptomaticSplitToRecovered", 0.621118)
let asymptomaticSplitToAysymptomatic = CreateConnector("asymptomaticSplitToAsymptomatic", 1.0)

MakeConnection(asymptomaticNode, asymptomaticToAysymptomaticSplit, asymptomaticSplit);
MakeConnection(asymptomaticSplit, asymptomaticSplitToRecovered, recoveredNode);
MakeConnection(asymptomaticSplit, asymptomaticSplitToAysymptomatic, asymptomaticNode);

////--------------------------------------------------------------------------------------------------
////-- Symptomatic Case Loop -------------------------------------------------------------------------------
////--------------------------------------------------------------------------------------------------
let symptomaticSplit = CreateSplitter("SymptomaticSplit");

let symptomaticToSymptomaticSplit = CreateConnector("SymptomaticToSymptomaticSplit", 1.0)

let symptomaticSplitToRecovered = CreateConnector("SymptomaticSplitToRecovered", 0.2570694)
let symptomaticSplitToSymptomatic = CreateConnector("SymptomaticSplitToSymptomatic", 1.0)

MakeConnection(symptomaticNode,  symptomaticToSymptomaticSplit, symptomaticSplit);
MakeConnection(symptomaticSplit, symptomaticSplitToRecovered,   recoveredNode);
MakeConnection(symptomaticSplit, symptomaticSplitToSymptomatic, symptomaticNode);

////--------------------------------------------------------------------------------------------------
////-- Infected Sensors -------------------------------------------------------------------------------
////--------------------------------------------------------------------------------------------------

let symptomaticSensor = CreateSensor("SymptomaticSensor")
symptomaticSensor.monitoredObjName = symptomaticNode.name;

let asymptomaticSensor = CreateSensor("AsymptomaticSensor")
asymptomaticSensor.monitoredObjName = asymptomaticNode.name;

let hospitalizedSensor = CreateSensor("HospitalizedSensor")
hospitalizedSensor.monitoredObjName = hospitalizedNode.name;

let criticalSensor = CreateSensor("CriticalSensor")
criticalSensor.monitoredObjName = criticalNode.name;

let symptomaticSensorToSymptomaticTrasmission = CreateConnector("SymptomaticSensorToSymptomaticTrasmission");
let asymptomaticSensorToAsymptomaticTrasmission = CreateConnector("AsymptomaticSensorToAsymptomaticTrasmission");
let hospitalizedSensorToHospitalizedTrasmission = CreateConnector("HospitalizedSensorToHospitalizedTrasmission");
let criticalSensorToCriticalTrasmission = CreateConnector("CriticalSensorToCriticalTrasmission");

let symptomaticTrasmission = CreateSplitter("SymptomaticTrasmission");
let asymptomaticTrasmission = CreateSplitter("AsymptomaticTrasmission");
let hospitalizedTrasmission = CreateSplitter("HospitalizedTrasmission");
let criticalTrasmission = CreateSplitter("CriticalTrasmission");

MakeConnection(symptomaticSensor, symptomaticSensorToSymptomaticTrasmission, symptomaticTrasmission);
MakeConnection(asymptomaticSensor, asymptomaticSensorToAsymptomaticTrasmission, asymptomaticTrasmission);
MakeConnection(hospitalizedSensor, hospitalizedSensorToHospitalizedTrasmission, hospitalizedTrasmission);
MakeConnection(criticalSensor, criticalSensorToCriticalTrasmission, criticalTrasmission);

////------------------------------------------------------------------------------------------------
////-- Recovered Loop ------------------------------------------------------------------------------
////--------------------------------------------------------------------------------------------------

let recoveredToRecovConversionSplitter = CreateConnector("RecoveredToRecovConversionSplitter");
let recovConversionSplitter = CreateSplitter("RecovConversionSplitter");

let recovConversionSplitterToSusceptible = CreateConnector("RecovConversionSplitterToSusceptible", 0.00010001);//0.00010001);
let recovConversionSplitterToRecovered = CreateConnector("RecovConversionSplitterToRecovered");

let susceptibleNode = CreateNode("Susceptible");
susceptibleNode.pool = 1000.0;

MakeConnection(recoveredNode, recoveredToRecovConversionSplitter, recovConversionSplitter );
MakeConnection(recovConversionSplitter, recovConversionSplitterToSusceptible, susceptibleNode);
MakeConnection(recovConversionSplitter, recovConversionSplitterToRecovered, recoveredNode);


////--------------------------------------------------------------------------------------------------
////-- Transmissions Rates  -------------------------------------------------------------------------------
////--------------------------------------------------------------------------------------------------

let symptomaticTransmissionToSympPump = CreateConnector("SymptomaticTransmissionToSympPump", 0.5501285);
let asymptomaticTransmissionToAsympPump = CreateConnector("AsymptomaticTransmissionToAsympPump", 1.0);
let hospitalizedTransmissionToHospPump = CreateConnector("HospitalizedTransmissionToHospPump", 0.3057143);
let criticalTransmissionToCritPump = CreateConnector("CriticalTransmissionToCritPump", 0.214);

////--------------------------------------------------------------------------------------------------
////-- Transmissions Pumps  -------------------------------------------------------------------------------
////--------------------------------------------------------------------------------------------------

let sympPump = CreatePump("SympPump");
sympPump.pumpSourceName = susceptibleNode.name;
let asympPump = CreatePump("AsympPump");
asympPump.pumpSourceName = susceptibleNode.name;
let hospPump = CreatePump("HospPump");
hospPump.pumpSourceName = susceptibleNode.name;
let criticalPump = CreatePump("CriticalPump");
criticalPump.pumpSourceName = susceptibleNode.name;

let sympPumpToExposed = CreateConnector("SympPumpToExposed");
let asympPumpToExposed = CreateConnector("AsympPumpToExposed");
let hospPumpToExposed = CreateConnector("HospPumpToExposed");
let criticalPumpToExposed = CreateConnector("CriticalPumpToExposed");

MakeConnection(symptomaticTrasmission,   symptomaticTransmissionToSympPump,   sympPump );
MakeConnection(asymptomaticTrasmission,  asymptomaticTransmissionToAsympPump, asympPump );
MakeConnection(hospitalizedTrasmission,  hospitalizedTransmissionToHospPump,  hospPump );
MakeConnection(criticalTrasmission,      criticalTransmissionToCritPump,      criticalPump );

MakeConnection(sympPump,     sympPumpToExposed,     exposedNode);
MakeConnection(asympPump,    asympPumpToExposed,    exposedNode );
MakeConnection(hospPump,     hospPumpToExposed,     exposedNode );
MakeConnection(criticalPump, criticalPumpToExposed, exposedNode );

//-------------------------------------------------------------------------------------------------

function MakeConnection(from, connector, to) {
    connector.receiverName = to.name;

    if (typeof Object.getOwnPropertyDescriptor(from.constructor.prototype, 'connectorName') !== 'undefined') {
        from.connectorName = connector.name;
    }
    else if (typeof Object.getOwnPropertyDescriptor(from.constructor.prototype, 'AddConnectorName') !== 'undefined') {
        from.AddConnectorName(connector.name);
    }
    else {
        throw TypeError("Cannot set connection on node");
    }
}

function SetConnection(from, connector, to)
{
    connector.receiverName = to.name;
    from.connectorName = connector.name;
}

function AddConnection(from, connector, to) {
    connector.receiverName = to.name;
    from.AddConnectorName(connector.name);
}

function CreateConnector(name, baseProb = 1.0) {
    // Creation
    let connectorAgent = graph.AddAgent();
    let connectorBlkBoard = connectorAgent.GetAgentBlackboard();
    connectorBlkBoard.SetString("type", "Connector"); // Allows it to be fetched by type from graph
    let connectorObject = GetAgentTypeObject(connectorAgent);

    // Initialization
    connectorObject.name = name;
    //connectorObject.receiverName = nameOfReceiver;
    connectorObject.baselineProbability = baseProb;
    return connectorObject;
}

function CreateSource(name, poolSourceNum = 0.0 ) {
    // Creation
    let sourceAgent = graph.AddAgent();
    let sourceBlkBoard = sourceAgent.GetAgentBlackboard();
    sourceBlkBoard.SetString("type", "Source"); // Allows it to be fetched by type from graph
    let sourceObject = GetAgentTypeObject(sourceAgent);

    // Initialization
    sourceObject.name = name;
    sourceObject.pool = poolSourceNum;
    //sourceObject.InitConnectorNames(listOfConnectorNames) // ONLY CALL THIS FUNCTION ONCE
    return sourceObject;
}

function CreateNode(name) {
    // Creation
    let nodeAgent = graph.AddAgent();
    let nodeBlkBoard = nodeAgent.GetAgentBlackboard();
    nodeBlkBoard.SetString("type", "Node"); // Allows it to be fetched by type from graph
    let nodeObject = GetAgentTypeObject(nodeAgent);

    // Initialization
    nodeObject.name = name;
    //nodeObject.connectorName = connectorName;
    //nodeObject.pool = 0.0;
    //nodeObject.incoming = 0.0;
    return nodeObject;
}

function CreateSink(name) {
    // Creation
    let sinkAgent = graph.AddAgent();
    let sinkBlkBoard = sinkAgent.GetAgentBlackboard();
    sinkBlkBoard.SetString("type", "Sink"); // Allows it to be fetched by type from graph
    let sinkObject = GetAgentTypeObject(sinkAgent);

    // Initialization
    sinkObject.name = name;
    //sinkObject.pool = 0.0;
    return sinkObject;
}

function CreateSplitter(name) {
    // Creation
    let splitterAgent = graph.AddAgent();
    let splitterBlkBoard = splitterAgent.GetAgentBlackboard();
    splitterBlkBoard.SetString("type", "Splitter"); // Allows it to be fetched by type from graph
    let splitterObject = GetAgentTypeObject(splitterAgent);

    // Initialization
    splitterObject.name = name;
    //splitterObject.pool = 0.0;
    //splitterObject.InitConnectorNames(listOfConnectorNames) // ONLY CALL THIS FUNCTION ONCE
    return splitterObject;
}

function CreateSensor(name) {
    // Creation
    let sensorAgent = graph.AddAgent();
    let sensorBlkBoard = sensorAgent.GetAgentBlackboard();
    sensorBlkBoard.SetString("type", "Sensor"); // Allows it to be fetched by type from graph
    let sensorObject = GetAgentTypeObject(sensorAgent);

    // Initialization
    sensorObject.name = name;
    return sensorObject;
}

function CreatePump(name) {
    // Creation
    let pumpAgent = graph.AddAgent();
    let pumpBlkBoard = pumpAgent.GetAgentBlackboard();
    pumpBlkBoard.SetString("type", "Pump"); // Allows it to be fetched by type from graph
    let pumpObject = GetAgentTypeObject(pumpAgent);

    // Initialization
    pumpObject.name = name;
    return pumpObject;
}

function AddPropertiesToAgent(agentBlkBrd, propertiesObject) {
    let keys = Object.keys(propertiesObject);
    for (let k = 0; k < keys.length; k++ )
    {
        let key = keys[k];
        let value = propertiesObject[key];
        AddPropertyToAgent(agentBlkBrd, key, value);
    }
}

function AddPropertyToAgent(agentBlkBrd, key, value) {
    if (typeof value === 'string') {
        agentBlkBrd.SetString(key, value);
    }
    else if (typeof value === 'number') {
        agentBlkBrd.SetFloat(key, value);
    }
    else if (typeof value === 'boolean') {
        agentBlkBrd.SetBool(key, value);
    }
    else {
        throw TypeError("Unrecognized Property Type");
    }
}

//--------------------------------------------------------------------------------------------------

function CreateSEIRNode(simAgent) {
    if (!simAgent) { return null; }
    let agentBlackboard = simAgent.GetAgentBlackboard();
    let type = agentBlackboard.GetString("type", "DOES NOT EXIST");
    if      (type == "Node")        { return new Node(simAgent) } 
    else if (type == "Splitter")    { return new Splitter(simAgent); }
    else if (type == "Connector")   { return new Connector(simAgent); }
    else if (type == "Pump")        { return new Pump(simAgent); }
    else if (type == "Sensor")      { return new Sensor(simAgent); }
    else if (type == "Adjuster")    { return new Adjuster(simAgent); }
    else if (type == "Sink")        { return new Sink(simAgent); }
    else if (type == "Source")      { return new Source(simAgent); }
    else { return null; }
}