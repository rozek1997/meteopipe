import Amplify, {Auth} from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: "eu-central-1",
        identityPoolId: "eu-central-1:ef71297e-089c-401a-a451-121ba1d6425a",
        userPoolId: "eu-central-1_dmnlpIx6M",
        userPoolWebClientId: "2vjt1p8l6rrf7nopj968188fe7",
    }
});

export const currentAmplifyConfig = Auth.configure();