// ----------------------------------------------------------------------------
// Detach & Delete the Credersi-vend Domain
// ----------------------------------------------------------------------------

MATCH (domain:Domain {uuid: "7bd996ad-79f9-4197-ac33-8ef5181899af"})-[*]->(n)
DETACH DELETE domain, n;