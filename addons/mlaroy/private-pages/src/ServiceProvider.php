<?php

namespace Mlaroy\PrivatePages;

use Statamic\Facades\Collection;
use Statamic\Fields\Field;
use Statamic\Fields\Fieldset;
use Statamic\Fields\Value;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    public function bootAddon()
    {
        // Retrieve the "page" collection
        $collection = Collection::findByHandle('pages');

        // Get all entries in the "page" collection
        $entries = $collection->queryEntries()->get();

        foreach ($entries as $entry) {
            // Get the entry's data
            $protectedFieldValue = $entry->value('password_protected');

            // Check if the "Protected" field has a true value
            if ($protectedFieldValue === true) {
                // Get the entry's data
                $data = $entry->data();

                // Add the 'protected: true' key-value pair
                $data['protect'] = 'password';

                // Update the entry's data with the modified YAML front matter
                $entry->data($data);

                // Save the entry to persist the changes
                $entry->save();
            } else {

                // remove the property from frontmatter
                $data = $entry->data();
                unset($data['protect']);

                 // Save the entry to persist the changes
                 $entry->save();
            }
        }
    }
}
