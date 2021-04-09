import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "us-east-2_jIRCqeQrp",
	ClientId: "352ksv0tbbdm2g7tlqv57adpj1",
};

export default new CognitoUserPool(poolData);
