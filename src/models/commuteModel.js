/**
    @exports CommuteModel
    @file Models handle calls to the database or to fetch data from APIs

    @typedef {Object} CommuteJsonObject
    @property {string} First The person's first name
    @property {string} Last The person's last name

 */

// Axios would be used if the model made an API call
// const axios = require('axios');

/** A 'database' that is accessed by the model
 Format is id: object
 The model would normally make a call to a real database or to an external API
 IDs in an external API may not be reliable, and we will likely not be able to create or modify data
*/
commuteDatabase = {
    '21001': {
      zipCode: "21001",
      commuteTime: "100",
    },
    '21002': {
        zipCode: "21002",
        commuteTime: "200",
      },
      '21003': {
        zipCode: "21003",
        commuteTime: "300",
      },
      '21004': {
        zipCode: "21004",
        commuteTime: "400",
      },
      '21005': {
        zipCode: "21005",
        commuteTime: "500",
      },
      '21006': {
        zipCode: "21006",
        commuteTime: "600",
      }, 
  }

/** Note: The parameters given here are only an commute and will change depending on the functionality of the model
    Thrown exception messages may also vary between models as needed
*/
/**
    The model would make an api request using axios or a database request if no api is available
    The create method should create a data store record with the given parameters
    If creating a new record is not an available option, e.g. an external API request,
    the create method should throw an exception
    @returns {CommuteJsonObject} The new CommuteModel data
    @throws Will throw an error if the method is used
*/
exports.create = async () => {
    console.log('CommuteModel create');
    throw new Error('CommuteModel does not support "create"');
};


/**
    The model would make an api request using axios or a database request if no api is available
    The getAll method returns data that matches the given constraints
    @returns {CommuteJsonObject|Array} An array CommuteJsonObject data
*/
exports.getAll = async (query) => {
    console.log('CommuteModel getAll');
    /** Get all resouce data of the model type from the database or api
     If we were accessing a real database or an api, we could easily pass our constraints to it to handle the filtering
     However, since we only have an object here, we can manually filter our data
    */
    commuteData = Object.values(commuteDatabase);
    // Filter our array to only those object that match every constraint passed in the query
    return commuteData.filter(commute => {
        // Not sure of the one-liner method to do this yet
        let matchesConstraints = true;
        Object.keys(query).every((queryKey) => {
            if (!(queryKey in commute) || commute[queryKey] !== query[queryKey]) {
                matchesConstraints = false;
                return;
            }
        });
        return matchesConstraints;
    });
};

/**
    The model would make an api request using axios or a database request if no api is available
    The get method returns data that matches the given constraints
    @returns {CommuteJsonObject|Array} An array CommuteJsonObject data
*/
exports.get = async (id) => {
    console.log('CommuteModel get');
    if (id in commuteDatabase) {
        return commuteDatabase[id];
    }
    throw new Error(`Could not find object with ID ${id}`);
};


/**
    The model would make an api request using axios or a database request if no api is available
    The edit method will edit an existing data store record with the given parameters
    @returns {CommuteJsonObject} The new CommuteModel data
    @throws Will throw an error if the method is used.
*/
exports.update = async () => {
    console.log('CommuteModel edit');
    throw new Error('CommuteModel does not support "update"');
};

/**
    The model would make an api request using axios or a database request if no api is available
    The delete method will edit an existing data store record with the given parameters
    @returns {undefined}
    @throws Will throw an error if the method is used
*/
exports.delete = async () => {
    console.log('CommuteModel delete');
    throw new Error('CommuteModel does not support "delete"');
};