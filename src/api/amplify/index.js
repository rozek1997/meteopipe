import Amplify, {Auth} from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: "eu-central-1",
        userPoolId: "eu-central-1_dmnlpIx6M",
        userPoolWebClientId: "2vjt1p8l6rrf7nopj968188fe7",
    }
});

export const currentAmplifyConfig = Auth.configure();