'use client';

import { Button, Paper, Stack, TextField, Autocomplete, Link } from '@mui/material';

import { useState } from 'react';

// As same as Polygon, the page link is same for creating new language and editing existed language
// It can be divided into two pages if needed

export default function NewLanguage({
  languageList,
}: {
  languageList: { label: string; value: string }[];
}) {
  // existedLanguageList variable is the list of languages that already have statements and tutorials
  // it should be fetched from the server in the useEffect hook
  const [existedLanguageList] = useState([{ label: 'English', value: 'en' }]);

  // cloneClicked variable is used to show the existedLanguageList when the user wants to clone
  const [cloneClicked, setCloneClicked] = useState(false);
  return (
    <Stack mt={2} gap={4}>
      <Paper>
        <Stack direction='column' px={4} py={2} gap={2}>
          <Autocomplete
            id='language_setting'
            options={languageList.filter(
              (lang) =>
                !existedLanguageList.find(
                  (existedLang) => existedLang.value === lang.value,
                ),
            )}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Language'
                helperText={
                  !cloneClicked && (
                    <>
                      If you want to clone statement and tutorial from existing,{' '}
                      <Link href='#' onClick={() => setCloneClicked(true)}>
                        click here
                      </Link>
                    </>
                  )
                }
              />
            )}
          />
          {cloneClicked && (
            <Autocomplete
              id='existed_language_setting'
              options={existedLanguageList}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label='Clone from language' />
              )}
            />
          )}
          <Button variant='contained'>Create</Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
