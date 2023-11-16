# Architecture and project structure

## Requirements

- Node LTS
  - If you're using `nvm`
    - `nvm install --latest-npm`
    - `nvm use`
- Pnpm LTS

## Main files and directory structure

- `src`: all code files is included in this directory
- `src/app`: next's routing folder
- `src/components`: All main components
- `src/components/form-settings`: All form settings components to define project settings
- `src/libs`: All coding libraries are included in this directory
- `src/scripts`: The scripts that configure the project according to the user's settings are here
- `src/temp`: this directory will be created by the scripts according to the user's settings, then it must be deleted
- `tailwind.config.ts`: the tailwind configuration can be found here
