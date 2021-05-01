import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'

export default function ImageUpload({ value, ...rest }) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles([])
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <Grid
      templateColumns={(files.length !== 0 || value) && 'repeat(2, 1fr)'}
      gap={(files.length !== 0 || value) && '4'}
    >
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="md"
        p="4"
        fontSize="xs"
        textAlign="center"
        textColor="gray.500"
        {...getRootProps()}
      >
        <Flex
          justify="center"
          align="center"
          border="2px"
          borderStyle="dashed"
          borderRadius="md"
          h="full"
          p="3"
          cursor="pointer"
        >
          <Box py="2">
            <input {...getInputProps()} {...rest} />
            <Text lineHeight="5">
              Drag an image here or click to select a file
            </Text>
          </Box>
        </Flex>
      </Box>
      {(files.length !== 0 || value) && (
        <aside>
          <div>
            {files.length === 0 ? (
              <Box
                h="48"
                overflow="hidden"
                borderRadius="md"
                style={{
                  background: `url(${value})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ) : (
              files.map(file => {
                return (
                  <Box
                    h="48"
                    overflow="hidden"
                    borderRadius="md"
                    style={{
                      background: `url(${file.preview})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    key={file.name}
                  />
                )
              })
            )}
          </div>
        </aside>
      )}
    </Grid>
  )
}
