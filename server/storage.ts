import { createStorage } from 'unstorage';
import memoryDriver from "unstorage/drivers/memory";

// Opret storage med en driver (her bruger vi filsystemet)
const storage = createStorage({
    driver: memoryDriver(),
});

export default storage;