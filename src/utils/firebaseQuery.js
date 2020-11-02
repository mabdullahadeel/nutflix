import { firebase } from '../lib/firebase/firebase';
import { getFromSessionStorage, saveToSessionStorage } from './dataStorage';

export function getSeriesFilmsDataFromFirebase(target) {
    let content = [];
    if (getFromSessionStorage(target) === null) {
        console.log("Adding to Firebase")
        firebase
            .firestore()
            .collection(target).limit(10)
            .get()
            .then((snapshot) => {
                snapshot.docs.map((contentObj) => (content.push({
                    ...contentObj.data(),
                    docId: contentObj.id,
                })));
                saveToSessionStorage(content, target);
            })
            .catch((error) => {
                console.log(error.message);
            });
    } else {
        content = (getFromSessionStorage(target))
    }

    return content
}
