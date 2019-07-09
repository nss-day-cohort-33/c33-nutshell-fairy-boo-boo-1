const API = {
  getfromDatabase: function(whichResource) {
    return fetch(`http://localhost:8088/${whichResource}`) //Access the data location and return a promise object containing it
      .then(data => data.json()); //A promise object is being converted from JSON back to regular Javascript
  },
  addtoDatabase: function(whichResource, oneItem) {
    return fetch(`http://localhost:8088/${whichResource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(oneItem) //Being converted to JSON format from Javascript
    });
  },
  getSpecificItemfromDatabase: function(whichResource, whichItem) {
    return fetch(`http://localhost:8088/${whichResource}/${whichItem}`) //Access the data location and return a specific item
      .then(data => data.json()); //A promise object is being converted from JSON back to regular Javascript
  },
  updateDatabase: function(whichResource, theUpdatedEntry) {
    return fetch(
      `http://localhost:8088/${whichResource}/${theUpdatedEntry.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(theUpdatedEntry) //Being converted to JSON format from Javascript
      }
    );
  },
  //TODO: Events testing purposes, may need to be refactored
  postEventEntries: function(theNewEvent) {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(theNewEvent) //Being converted to JSON format from Javascript
    });
  },
  getEventEntries: function() {
    return fetch("http://localhost:8088/events") //Access the data location and return a promise object containing it
      .then(data => data.json()); //A promise object is being converted from JSON back to regular Javascript
  },
  deleteEventEntry: function(id) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  addNewMessage: function(newMessage) {
    return fetch("http://localhost:8088/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    });
  }
};

export { API };
