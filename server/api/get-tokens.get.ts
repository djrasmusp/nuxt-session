import storage from '../storage'; // Importér unstorage-konfiguration

export default defineEventHandler(async (event) => {
    const session = event.context.session;  // Hent sessionen fra context

    const idToken = await storage.getItem(session.id)

    return idToken
})