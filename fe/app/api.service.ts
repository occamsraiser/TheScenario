import { Data } from './types';

// base config for API requests

const BASE_URL = 'http://localhost:3000/data/';
const MODE = 'cors';

const TESTDATA_URL = BASE_URL + 'testdata';



// functions for requesting data
export const getAllData = async(): Promise<Data[]> => {
    
    const response = await fetch(
        BASE_URL,
        {
            method: 'GET',
            mode: MODE,
        }
    );

    const result = await response.json();
    return result;
}

export const getDataById = async(id: string): Promise<Data> => {
    const response = await fetch(
        BASE_URL + id,
        {
            method: 'GET',
            mode: MODE,
        }
    )

    const result = await response.json();
    return result;
}

export const createData = async(payload: object): Promise<Data> => {
    const response = await fetch(
        BASE_URL,
        {
            method: 'POST',
            mode: MODE,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        }
    )

    const result = await response.json();
    return result;
}

export const updateDataById = async(id: string, payload: object): Promise<Data> => {
    const response = await fetch(
        BASE_URL + id,
        {
            method: 'POST',
            mode: MODE,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        }    
    )

    const result = await response.json();
    return result;
}

export const deleteDataById = async(id: string): Promise<Data> => {
    const response = await fetch(
        BASE_URL + id,
        {
            method: 'DELETE',
            mode: MODE,
        }
    )

    const result = await response.json();
    return result;
}



// this was useful for testing the api connection during initial setup
export const getTestData = async(): Promise<Data[]> => {

    const response = await fetch(
        TESTDATA_URL,
        {
            method: 'GET',
            mode: MODE
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  };