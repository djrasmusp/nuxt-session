import { nanoid } from 'nanoid';
import storage from '../storage'; // Importér unstorage-konfiguration

export default defineEventHandler(async (event) => {
    const session = event.context.session;  // Hent sessionen fra context

    const tokenID = nanoid()

    await storage.setItem(session.id, 'a'.repeat(3000));

    return session
})