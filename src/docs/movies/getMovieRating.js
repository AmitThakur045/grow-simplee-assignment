module.exports = {
  get: {
    tags: ["GetMovieRating"],
    description: "Get rating of a movie by movie ID",
    operationId: "getMovieRating",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "A single movie id",
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: "successfully fetched all the movies",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Rating",
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
