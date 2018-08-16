PROJECT_TARGET_ADD(audioplayer)

file(GLOB FILES "*.html" "*.css" "*.js" "images" "songs") 
add_input_files("${FILES}")

SET_TARGET_PROPERTIES(${TARGET_NAME} PROPERTIES
		LABELS "HTDOCS"
OUTPUT_NAME ${TARGET_NAME})
