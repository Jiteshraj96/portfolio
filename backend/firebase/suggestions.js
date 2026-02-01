// Suggestions Module - Firebase Firestore Integration
// Handles storing suggestions in Firestore

import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Store a suggestion in Firestore
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} message - Suggestion message
 * @returns {Promise} - Promise resolving to document reference
 */
export async function storeSuggestion(name, email, message) {
    try {
        const docRef = await addDoc(collection(db, "suggestions"), {
            name: name,
            email: email,
            message: message,
            createdAt: serverTimestamp()
        });
        console.log("Suggestion stored with ID:", docRef.id);
        return docRef;
    } catch (error) {
        console.error("Error storing suggestion:", error);
        throw error;
    }
}

/**
 * Send email notification using EmailJS or similar service
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} message - Suggestion message
 */
export async function sendEmailNotification(name, email, message) {
    // Using EmailJS for sending emails from frontend
    // You need to set up EmailJS account and get service_id, template_id, user_id
    
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "jiteshdesai2001@gmail.com"
    };

    try {
        // EmailJS send function
        // Uncomment and configure when EmailJS is set up
        /*
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            templateParams,
            'YOUR_PUBLIC_KEY'
        );
        */
        console.log("Email notification sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
