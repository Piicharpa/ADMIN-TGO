/**
 * @fileoverview This service file provides an API client for managing Verifier data.
 * It's based on the provided UnitService template and handles CRUD operations for verifiers.
 */

import type { Demo } from "@/types";

// Assumed type for the Verifier based on the endpoint names.
type Verifier = {
  auditor_id: number;
  user_id: number;
  name: string;
  register_id: string;
  description: string;
  expertise: string;
  organization: string;
  address: string;
  subdistrict_id: number;
  district_id: number;
  province_id: number;
  zipcode: number;
  phone_number: string;
  registration_date: string;
  created_date: string;
  updated_date: string;
  prefix_name: string;
};

// Use a base URL to make the code more flexible and easier to manage.
const BASE_URL = "http://178.128.123.212:5000/api/v1";

const VERIFIER_URL = `${BASE_URL}/auditor`; // Singular for managing a specific verifier

/**
 * Maps API response data to a local Verifier type.
 * @param apiData - The raw data object from the API.
 * @returns The mapped Verifier object.
 */
function mapVerifier(apiData: any): Verifier {
  return {
    auditor_id: apiData.auditor_id,
    user_id: apiData.user_id,
    name: apiData.name,
    register_id: apiData.register_id,
    description: apiData.description,
    expertise: apiData.expertise,
    organization: apiData.organization,
    address: apiData.address,
    subdistrict_id: apiData.subdistrict_id,
    district_id: apiData.district_id,
    province_id: apiData.province_id,
    zipcode: apiData.zipcode,
    phone_number: apiData.phone_number,
    registration_date: apiData.registration_date,
    created_date: apiData.created_date,
    updated_date: apiData.updated_date,
    prefix_name: apiData.prefix_name,
  };
}

/**
 * Formats date strings in a Verifier object to YYYY-MM-DD format.
 * @param verifier - The Verifier object to format.
 * @returns A new Verifier object with formatted dates.
 */
function formatVerifierDates(verifier: Verifier): Verifier {
  const newVerifier = { ...verifier };
  if (newVerifier.registration_date) {
    newVerifier.registration_date = new Date(newVerifier.registration_date).toISOString().split('T')[0];
  }
  if (newVerifier.created_date) {
    newVerifier.created_date = new Date(newVerifier.created_date).toISOString().split('T')[0];
  }
  if (newVerifier.updated_date) {
    newVerifier.updated_date = new Date(newVerifier.updated_date).toISOString().split('T')[0];
  }
  return newVerifier;
}

export const VerifierService = {
  /**
   * Fetches all verifiers from the API.
   * Now uses the plural URL for the GET request.
   * @returns A promise that resolves to an array of Verifier objects.
   */
  getVerifiers() {
    return fetch(VERIFIER_URL, { headers: { "Cache-Control": "no-cache" } })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then(data => data.map(mapVerifier));
  },

  /**
   * Fetches a single verifier by their unique ID.
   * @param id - The unique ID of the verifier.
   * @returns A promise that resolves to a single Verifier object.
   */
  getVerifierById(id: number) {
    return fetch(`${VERIFIER_URL}/${id}`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then(mapVerifier);
  },

  /**
   * Creates a new verifier.
   * Formats the dates before sending the request.
   * @param verifier - The Verifier object to create.
   * @returns A promise that resolves to the newly created Verifier object.
   */
  createVerifier(verifier: Verifier) {
    const formattedVerifier = formatVerifierDates(verifier);
    return fetch(VERIFIER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedVerifier),
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then(mapVerifier);
  },

  /**
   * Updates an existing verifier.
   * Formats the dates before sending the request.
   * @param verifier - The Verifier object to update, including its ID.
   * @returns A promise that resolves to the updated Verifier object.
   */
  updateVerifier(verifier: Verifier) {
    const formattedVerifier = formatVerifierDates(verifier);
    return fetch(`${VERIFIER_URL}/${verifier.auditor_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedVerifier),
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then(mapVerifier);
  },

  /**
   * Deletes a verifier by its unique ID.
   * @param id - The unique ID of the verifier to delete.
   * @returns A promise that resolves when the deletion is successful.
   */
  deleteVerifier(id: number) {
    return fetch(`${VERIFIER_URL}/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      });
  },
};
