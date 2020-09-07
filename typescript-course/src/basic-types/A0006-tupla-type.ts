const clientData = [number, string] = [1, 'Demys']
const clientData1 = [number, string, string] = [1, 'Demys', 'Lima']
const clientData2 = [number, string, string?] = [1, 'Demys']
const clientData3 = readonly [number, string, ...string] = [1, 'Demys']

clientData[0] = 100
clientData[1] = 'Luiz'

//operation not permitted
clientData[0] = 'Test'
//Operation not permitted
clientData[1] = 100

