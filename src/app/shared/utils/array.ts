export class ArrayUtils {

  // Suffle search result arraUsing Durstenfeld shuffle algorithm.
  public static shuffleArray(arrayToShuffle: any[]) {
    const array = [...arrayToShuffle];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
}

