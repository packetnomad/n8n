import config from '../../../config';

export const REST_PATH_SEGMENT = config.getEnv('endpoints.rest') as Readonly<string>;

export const PUBLIC_API_REST_PATH_SEGMENT = config.getEnv('publicApi.path') as Readonly<string>;

export const AUTHLESS_ENDPOINTS: Readonly<string[]> = [
	'healthz',
	'metrics',
	config.getEnv('endpoints.webhook'),
	config.getEnv('endpoints.webhookWaiting'),
	config.getEnv('endpoints.webhookTest'),
];

export const SUCCESS_RESPONSE_BODY = {
	data: {
		success: true,
	},
} as const;

export const LOGGED_OUT_RESPONSE_BODY = {
	data: {
		loggedOut: true,
	},
};

/**
 * Routes requiring a valid `n8n-auth` cookie for a user, either owner or member.
 */
export const ROUTES_REQUIRING_AUTHENTICATION: Readonly<string[]> = [
	'GET /me',
	'PATCH /me',
	'PATCH /me/password',
	'POST /me/survey',
	'POST /owner',
	'GET /non-existent',
];

/**
 * Routes requiring a valid `n8n-auth` cookie for an owner.
 */
export const ROUTES_REQUIRING_AUTHORIZATION: Readonly<string[]> = [
	'POST /users',
	'GET /users',
	'DELETE /users/123',
	'POST /users/123/reinvite',
	'POST /owner',
	'POST /owner/skip-setup',
];

/**
 * Mapping tables link entities but, unlike `SharedWorkflow` and `SharedCredentials`,
 * have no entity representation. Therefore, mapping tables must be cleared
 * on truncation of any of the collections they link.
 */
export const MAPPING_TABLES_TO_CLEAR: Record<string, string[] | undefined> = {
	Workflow: ['workflows_tags'],
	Tag: ['workflows_tags'],
};


/**
 * Name of the connection used for creating and dropping a Postgres DB
 * for each suite test run.
 */
export const BOOTSTRAP_POSTGRES_CONNECTION_NAME: Readonly<string> = 'n8n_bs_postgres';

/**
 * Name of the connection (and database) used for creating and dropping a MySQL DB
 * for each suite test run.
 */
export const BOOTSTRAP_MYSQL_CONNECTION_NAME: Readonly<string> = 'n8n_bs_mysql';

/**
 * Timeout (in milliseconds) to account for fake SMTP service being slow to respond.
 */
export const SMTP_TEST_TIMEOUT = 30_000;

/**
 * Nodes
 */
export const CURRENT_PACKAGE_VERSION = '0.1.0';
export const UPDATED_PACKAGE_VERSION = '0.2.0';

/**
 * Timeout (in milliseconds) to account for DB being slow to initialize.
 */
export const DB_INITIALIZATION_TIMEOUT = 30_000;

/**
 * Mapping tables having no entity representation.
 */
export const MAPPING_TABLES = {
	WorkflowsTags: 'workflows_tags',
} as const;
