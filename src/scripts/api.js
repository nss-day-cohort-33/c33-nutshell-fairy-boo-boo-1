// const API = {
//     getJournalEntries: function () {
//         return fetch(`http://localhost:8088/users`)  //Access the data location and return a promise object containing it
//             .then(data => data.json()) //A promise object is being converted from JSON back to regular Javascript
//     },
//     postJournalEntries: function (theNewUser) {
//         return fetch(`http://localhost:8088/users`, {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(theNewUser) //Being converted to JSON format from Javascript
//         })
//     },
//     //Instructions:  On click, delete journal entry--Part 2 of 2 [Complete]
//     // deleteJournalEntry: function (id) {
//     //     return fetch(`http://localhost:3000/objectsJournalEntry/${id}`, {
//     //         method: "DELETE",
//     //         headers:{
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     // },
//     // updateJournalEntry:  function (theUpdatedEntry) {
//     //     return fetch(`http://localhost:3000/objectsJournalEntry/${theUpdatedEntry.id}`, {
//     //     method: "PUT",
//     //     headers:{
//     //         "Content-Type": "application/json"
//     //     },
//     //     body: JSON.stringify(theUpdatedEntry) //Being converted to JSON format from Javascript
//     //     })
//     // }
// }

const API = {
    getfromDatabase: function (whichResource) {
        return fetch(`http://localhost:8088/${whichResource}`)  //Access the data location and return a promise object containing it
            .then(data => data.json()) //A promise object is being converted from JSON back to regular Javascript
    },
    addtoDatabase: function (whichResource, oneItem) {
        return fetch(`http://localhost:8088/${whichResource}`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oneItem) //Being converted to JSON format from Javascript
        })
    },
}

export {API}