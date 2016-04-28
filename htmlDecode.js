function htmlDecode(str) {
    var s = '';
    if (!str) { return s; }
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, '\\');
    s = s.replace(/&quot;/g, '\"');
    return s;
}