export default defineEventHandler(async (event) => {
    const session = await useSession(event, {
        password: process.env.NUXT_SESSION_PASSWORD,
        cookie: {
            secure: process.env.NODE_ENV === 'production', // Sikr cookie i produktion
            httpOnly: true, // Cookie kan kun læses af serveren (forhindrer XSS)
            sameSite: 'strict', // Forhindrer CSRF-angreb
            maxAge: 60 * 60 * 24 * 7, // 1 uges udløbstid
        }
    });

    // Gem sessionen i event.context, så den kan bruges i andre endpoints
    event.context.session = session;
})