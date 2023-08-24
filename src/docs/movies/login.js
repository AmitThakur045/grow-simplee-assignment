module.exports = {
    post: {
      tags: ["Login"],
      description: "Log In",
      operationId: "Log In",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "LogIn successfull",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginOutput",
              },
            },
          },
        },
        500: {
          description: "Server error",
        },
        400: {
          description: "Something went wrong",
        }
      },
    },
  };
  