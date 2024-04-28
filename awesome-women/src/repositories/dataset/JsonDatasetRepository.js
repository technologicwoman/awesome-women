async function readJsonFile(filename) {
    try {
        const response = await fetch(filename);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const JsonDatasetRepository = readJsonFile('./repositories/dataset/awesome_woman_dataset.json')


