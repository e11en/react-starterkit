import { addDataWithId, documentExists, getAllData, getData, updateData } from '@data/base';
import { IUser } from '@model/User';

const ENTITY = 'users';

function convertDocumentDataToUser(data: firebase.firestore.DocumentData): IUser {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    weight: data.weight,
    dailyLimit: data.dailyLimit
  };
}

export async function getUserData(id: string) {
  return getData(ENTITY, id);
}

export async function getAllUser() {
  return getAllData(ENTITY);
}

export async function addUser(data: IUser) {
  // TODO: Add check id user id already exists
  return addDataWithId(ENTITY, data.id, data);
}

export async function updateUser(id: string, data: IUser) {
  return updateData(ENTITY, id, data);
}

export async function userExists(id: string) {
  return documentExists(ENTITY, id).then(result => {
    const data = result.document.data();
    let user: IUser | undefined;
    if (data) {
      user = convertDocumentDataToUser(data);
    }

    return {
      exists: result.exists,
      user
    };
  });
}