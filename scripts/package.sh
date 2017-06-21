sh scripts/delete_tsc_files.sh
node_modules/.bin/ngc -p tsconfig-aot.json
cp src/bs4-breakpoint.module.ts src/bs4-breakpoint.module.d.ts
release-it
sh scripts/delete_tsc_files.sh

