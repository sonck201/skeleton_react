export default class HelperFormData {
    static dumpFormData(formData) {
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    }
}
