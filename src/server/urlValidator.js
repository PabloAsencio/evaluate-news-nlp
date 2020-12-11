// TODO: Find out a way of requiring this file in server/index.js without making a manual copy of it

function isValidURL(text) {
    // We only consider the http and https protocols
    const protocol = '(((http|https):\\/\\/)?)';
    // Naive regex for a DNS hostname. In particular we don't accept username and password as part of the DNS name.
    const dnsHostname = '(([A-Za-z0-9\\-]+\\.)+([A-Za-z])+)';
    // For the ipv4 regex see https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    const ipv4Hostname =
        '(((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]{1,2})\\.){3}((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]{1,2})))';
    // We don't take into consideration neither ipv6 addresses nor localhost for this app.
    const hostname = `(${dnsHostname}|${ipv4Hostname})`;
    // A valid port number must be a number between 0 and 65353. We don't check for reserved ports.
    const port =
        '(:(([0-5]?[0-9]{1,4})|(6535[0-3])|(653[0-4][0-9])|(65[0-2][0-9]{2})|(6[0-4][0-9]{3})))?';
    // Based on RFC3986 https://pretty-rfc.herokuapp.com/RFC3986
    const path =
        "(\\/(([A-Za-z0-9-_~:@\\.!\\$&'\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)*";
    const query =
        "(\\?(([A-Za-z0-9-_~:@\\.!\\$&'\\?\\/\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)?";
    const fragment =
        "(#(([A-Za-z0-9-_~:@\\.!\\$&'\\?\\/\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)?";
    const validURLRegEx = new RegExp(
        '^' + protocol + hostname + port + path + query + fragment + '$',
        'i'
    );
    return validURLRegEx.test(text);
}

module.exports = {
    isValidURL: isValidURL,
};
