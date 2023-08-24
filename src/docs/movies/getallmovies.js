module.exports = {
  get: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ["GetAllMovies"],
    description: "Fetch all of movies",
    operationId: "getAllMovies",
    parameters: [],
    requestBody: {},
    responses: {
      200: {
        description: "successfully fetched all the movies",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/MovieList",
            },
          },
        },
      },
      500: {
        description: "Server error",
      },
      400: {
        description: "Something went wrong",
      },
    },
  },
};
