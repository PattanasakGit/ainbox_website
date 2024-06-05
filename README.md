# Ainbox Website

## Getting Started:

1. Enter the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Choose the desired subdirectory to work on:
    - `landing_page`: For the Landing Page
    - `portal`: For the Portal Page

3. Install the necessary packages by running:
    ```sh
    yarn
    ```

4. Start the development server:
    ```sh
    yarn dev
    ```

## Notes:

- The `backend` folder is currently not operational.
- Both `landing_page` and `portal` directories contain their own `package.json` and `node_modules`.

## Usage:

- The Landing Page will be served on `http://localhost:3000`.
- The Portal Page will be served on `http://localhost:3001`.
- You can modify the code within the `frontend` directory and see the changes in real-time.
- Once you are satisfied with the changes, you can build the production version of the website.

## Version:

- Current Version: 1.0.0
- Release Date: 2024-06-05

## Folder Structure:
```
ainbox_website/
│
├── backend/               
│
└── frontend/              
    │
    ├── landing_page/     
    │   ├── node_modules/ 
    │   ├── public/       
    │   ├── src/           
    │   ├── package.json   
    │   └── ...            
    ├── portal/            
        ├── node_modules/  
        ├── public/       
        ├── src/           
        ├── package.json   
        └── ...            
```




