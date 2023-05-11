//--------------------------------------------------------------------------------------------------
//const requireTest = require('./../Code/Game/Data/SEIR_Version2/RequireTest.js')
//import * as ImportTest from './../Code/Game/Data/SEIR_Version2/RequireTest.js'

//-------------------------------------------------------------------------------------------------
// ENTRY POINT
//-------------------------------------------------------------------------------------------------

let globalBlackboard = this.simulationEngine.GetBlackboard();
let graph = simulationEngine.GetGraph();
let utils = simulationEngine.globalFunctions;
Update();

function Update() {
    // ---- Get SimAgents by Type -----------
    let nodes =         graph.GetAllAgentsWithKeyValuePair("type", "Node");
    let sources =       graph.GetAllAgentsWithKeyValuePair("type", "Source");
    let sinks =         graph.GetAllAgentsWithKeyValuePair("type", "Sink");
    let connectors =    graph.GetAllAgentsWithKeyValuePair("type", "Connector");
    let sensors =       graph.GetAllAgentsWithKeyValuePair("type", "Sensor");
    let pumps =         graph.GetAllAgentsWithKeyValuePair("type", "Pump");
    let adjusters =     graph.GetAllAgentsWithKeyValuePair("type", "Adjuster");

    // ------Create JS Object Wrappers Around SimAgents ----------
    for (let i = 0; i < connectors.size(); i++) { connectors[i] = utils.GetAgentTypeObject(connectors.get(i)); }
    for (let i = 0; i < nodes.size(); i++)      { nodes[i] =      utils.GetAgentTypeObject(nodes.get(i)); }
    for (let i = 0; i < sources.size(); i++)    { sources[i] =    utils.GetAgentTypeObject(sources.get(i)); }
    for (let i = 0; i < sinks.size(); i++)      { sinks[i] =      utils.GetAgentTypeObject(sinks.get(i)); }
    for (let i = 0; i < sensors.size(); i++)    { sensors[i] =    utils.GetAgentTypeObject(sensors.get(i)); }
    for (let i = 0; i < pumps.size(); i++)      { pumps[i] =      utils.GetAgentTypeObject(pumps.get(i)); }
    for (let i = 0; i < adjusters.size(); i++)  { adjusters[i] =  utils.GetAgentTypeObject(adjusters.get(i)); }

    // ------Event Firing-------
    for (let i = 0; i < sensors.size(); i++)        { sensors[i].SendReading(); }

    for (let i = 0; i < nodes.size(); i++)          { nodes[i].SendPool() }
    for (let i = 0; i < sources.size(); i++)        { sources[i].SendPool() }

    for (let i = 0; i < nodes.size(); i++)          { nodes[i].CleanUp(); }
    for (let i = 0; i < sinks.size(); i++)          { sinks[i].CleanUp(); }
    for (let i = 0; i < connectors.size(); i++)     { connectors[i].CleanUp(); }
    for (let i = 0; i < pumps.size(); i++)          { pumps[i].CleanUp(); }
    for (let i = 0; i < adjusters.size(); i++)      { adjusters[i].CleanUp(); }

    for (let i = 0; i < sensors.size(); i++)        { sensors[i].TakeReading(); }

}