import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: "eu-central-1",
        userPoolId: "eu-central-1_qk0joyOpK",
        userPoolWebClientId: "2l0lhlqtuuq77a6oce9bvs4e8e"
    }
});

export default Amplify;