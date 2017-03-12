#!/bin/bash
# This script replaces {{top}} instances in Nginx config files with the first script argument, providing variable-like functionality.
# The generated files are put into a built directory, leaving the originals in tact.

# Exit on failure
set -e

# Check that the script has been called with the first argument
# %/ removes the trailing slash if it exists
TOP="${1%/}"
if [ -z "${TOP}" ]; then
    echo "The first argument to this script should be the value of the {{top}} variable."
    exit 1
fi

# Check that the script has been called with the second argument
# %/ removes the trailing slash if it exists
NGINX_DIR="${2%/}"
if [ -z "${NGINX_DIR}" ]; then
    echo "The second argument to this script should be the path of a directory containing nginx files."
    exit 2
fi

# Escape the given argument so that we can pass it to sed
escaped_top_value="$(echo "${TOP}" | sed -e 's/[\/&]/\\&/g')"

# Remake the built directory
nginx_built="${NGINX_DIR}/built"
if [ -d "${nginx_built}" ]; then
    rm -r ${nginx_built}
fi
mkdir ${nginx_built}

for nginx_file_path in ${NGINX_DIR}/nginx-*.conf; do
    base_nginx_file_path="${nginx_file_path##*/}"
    sed -- "s/{{top}}/${escaped_top_value}/g" ${nginx_file_path} > ${nginx_built}/${base_nginx_file_path}
done
