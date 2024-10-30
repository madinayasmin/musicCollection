// Объект "Музыкальная коллекция"
const musicCollection = {
    albums: [
        { title: "Abbey Road", artist: "The Beatles", year: 1969 },
        { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
        { title: "Thriller", artist: "Michael Jackson", year: 1982 }
    ],
    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    const album = albums[index];
                    index++;
                    return { value: `${album.title} - ${album.artist} (${album.year})`, done: false };
                }
                return { done: true };
            }
        };
    }
};

// Перебор альбомов с помощью for...of
for (const album of musicCollection) {
    console.log(album);
}
