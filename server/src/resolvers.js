const resolvers = {
    Query: {

        // !!!! El orden de los parámetros importa aquí.Los resolver reciben 4 argumentos posicionales: parent, args, context, info. Por convencion al omitir alguno se usara guion bajo y guion bajo doble expeto el caso de info que como es el ultimo con no ponerlo basta.
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    // author recibe el parametro del padre authorId que es el id del autor que se quiere obtener.
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }

}

export default resolvers