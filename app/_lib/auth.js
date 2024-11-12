import nextAuth from "next-auth"
import Google from "next-auth/providers/google"

const authConfig = {
    providers: [Google({
            clientId: "7559398072-lm7pgp21m9g7s2m7vlnkg99oed5h54e2.apps.googleusercontent.com",
            clientSecret: "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"
        }
    )],
    secret: "this-is-the-secret",
    callbacks: {
        authorized({auth, request}) {
            return !!auth?.user;
        }
    }
}

export const {
    auth,
    signIn, signOut, handlers: {GET, POST}
} = nextAuth(authConfig)