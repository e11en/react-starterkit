import { Firestore } from '@core/firebase/Firebase';

/**
 * Get a document snapshot of one document.
 * @param entity The collection name
 * @param id The document id
 * @returns Promise<firebase.firestore.DocumentSnapshot>
 */
export function getData(entity: string, id: string) {
  return Firestore
    .collection(entity)
    .doc(id)
    .get();
}

/**
 * Get the complete collection of documents
 * @param entity The collection name
 * @returns firebase.firestore.QuerySnapshot
 */
export function getAllData(entity: string) {
  return Firestore
    .collection(entity)
    .get();
}

/**
 * Add a document to a collection
 * @param entity The collection name
 * @param data The data you want to store
 * @returns Promise<firebase.firestore.DocumentReference>
 */
export function addData(entity: string, data: firebase.firestore.DocumentData) {
  return Firestore.collection(entity).add(data);
}

/**
 * Add a document to a collection with a specific id
 * @param entity The collection name
 * @param id The document id
 * @param data The data you want to store
 * @returns Promise<firebase.firestore.DocumentReference>
 */
export function addDataWithId(entity: string, id: string, data: firebase.firestore.DocumentData) {
  return Firestore.collection(entity).doc(id).set(data);
}

/**
 * Update a document with the provided data
 * @param entity The collection name
 * @param id The document id
 * @param data The data you want to update
 * @returns Promise<void>
 */
export function updateData(entity: string, id: string, data: firebase.firestore.UpdateData) {
  return Firestore.collection(entity).doc(id).update(data);
}

/**
 * Check if a document already exists with the provided is
 * @param entity The collection name
 * @param id The document id
 * @returns Promise<{ exists: boolean; document: firebase.firestore.DocumentSnapshot; }>
 */
export function documentExists(entity: string, id: string) {
  return Firestore.collection(entity).doc(id).get().then(snapshot => {
    return { exists: snapshot.exists, document: snapshot };
  });
}