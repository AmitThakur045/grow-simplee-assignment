module.exports = {
  post: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ["AddMovieRating"],
    description: "Add user's rating",
    operationId: "addmovierating",
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
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Rating",
          },
        },
      },
    },
    responses: {
      200: {
        description: "successfully fetched all the movies",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Movie",
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
