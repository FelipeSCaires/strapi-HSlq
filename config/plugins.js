module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "local",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "FlashTMS API",
        description: "API de Gerenciamento de Transporte - FlashTMS",
        contact: {
          name: "FlashTMS Team",
          email: "contato@flashtms.com.br",
        },
        license: {
          name: "Proprietary",
        },
      },
      "x-strapi-config": {
        mutateDocumentation: (generatedDocumentationDraft) => {
          Object.keys(generatedDocumentationDraft.paths).forEach((path) => {
            if (path.includes("users-permissions")) {
              delete generatedDocumentationDraft.paths[path];
            }
          });
        },
      },
      servers: [
        {
          url: env("PUBLIC_URL", "http://localhost:1337"),
          description: "API Server",
        },
      ],
      security: [{ bearerAuth: [] }],
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: env("NODE_ENV") === "development",
        introspection: true,
        landingPage: true,
      },
    },
  },
});
