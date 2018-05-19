import {AsyncStorage} from 'react-native';

/**
 *   pushToPersistedState(newDummyObject)
 * */

export const pushToPersistedState = (newObject) => {
    AsyncStorage.getItem('persistedData').then(
        (oldData = {}) => {
            AsyncStorage.setItem('persistedData', JSON.stringify({...JSON.parse(oldData), ...newObject}))
        }
    )
}

/**
* getPersistedData().then(
*     persistedData => this.setState(persistedData)
* )
**/

export const getPersistedData = () => {
    return AsyncStorage.getItem('persistedData').then(
        (data) => JSON.parse(data)
    )
}