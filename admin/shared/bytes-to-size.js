function bytesToSize(bytes) {
  var fixed =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === undefined || bytes === 0) return 0;
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return ''.concat(bytes, ' ').concat(sizes[i]);
  return ''.concat((bytes / 1024 ** i).toFixed(fixed), ' ').concat(sizes[i]);
}

exports.bytesToSize = bytesToSize;
