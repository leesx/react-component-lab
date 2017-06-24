#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update"

#!/bin/sh
unset GIT_DIR
DIR_ONE=/usr/local/works/react-component-lab  #此目录为服务器页面展示目录
cd $DIR_ONE
git init
git remote add deploy  /usr/local/works/repos/rclab-bare.git
git clean -df
git pull deploy  master
pm2 restart react-component-lab  #pm2重启项目即可