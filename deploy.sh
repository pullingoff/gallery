# abort on errors
set -e

# build
npm run build

cd build

git init
git add -A
git commit -m '배포'

git push -f https://github.com/pullingoff/gallery.git main:gh-pages

cd -
