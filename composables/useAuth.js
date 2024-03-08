const authCookie = useCookie('auth');
export default () => (
    useState('auth', () => (
            authCookie?.value ?? {
                name: null,
                email: null,
                token: null,
            })
    )
);