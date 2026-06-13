import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovKiadbApi implements ICredentialType {
        name = 'N8nDevApisetuGovKiadbApi';

        displayName = 'Apisetu Gov Kiadb API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovKiadb/apisetu-gov-kiadb.svg', dark: 'file:../nodes/ApisetuGovKiadb/apisetu-gov-kiadb.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/kiadb/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/kiadb/v3',
                        description: 'The base URL of your Apisetu Gov Kiadb API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
