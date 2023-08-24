module.exports = {
  post: {
    tags: ["Sign Up"],
    description: "Sign Up",
    operationId: "Sign up",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SignUpInput",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Signup successfull",
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
