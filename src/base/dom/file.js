function createFile(){
    return {
        exportJSONToFile(jsonString, fileName) {
            const blob = new Blob([jsonString], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);
        }
    }
}

export const file = createFile()