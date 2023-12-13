import { config, collection, fields } from '@keystatic/core';

import { project, shouldUseCloudStorage } from '@/lib/config';

export default config({
  storage: {
    kind: shouldUseCloudStorage ? 'cloud' : 'local',
  },
  cloud: {
    project,
  },
  collections: {
    xips: collection({
      label: 'XIPs',
      slugField: 'filename',
      path: 'content/xips/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 1 } },
        }),
        filename: fields.text({
          label: 'Filename',
          validation: { length: { min: 1 } },
        }),
        xip: fields.integer({
          label: 'XIP Number',
        }),
        author: fields.text({
          label: 'Author(s)',
          description: 'e.g name (@github), name (@github)',
        }),
        type: fields.select({
          label: 'Type',
          defaultValue: '',
          options: [
            { label: '', value: '' },
            { label: 'Core Upgrade', value: 'core-upgrade' },
            { label: 'Integration Upgrade', value: 'integration-upgrade' },
            { label: 'Governance', value: 'governance' },
          ],
        }),
        network: fields.select({
          label: 'Network',
          defaultValue: '',
          options: [
            { label: '', value: '' },
            { label: 'Base', value: 'Base' },
            { label: 'Optimism', value: 'Optimism' },
            { label: 'Ethereum & Optimism', value: 'Ethereum & Optimism' },
            { label: 'Ethereum & Base', value: 'Ethereum & Base' },
            {
              label: 'Ethereum & Base & Optimism',
              value: 'Ethereum & Base & Optimism',
            },
          ],
        }),
        status: fields.select({
          label: 'Status',
          defaultValue: 'Draft',
          options: [
            { label: 'Draft', value: 'Draft' },
            { label: 'Feasibility', value: 'Feasibility' },
            { label: 'IC Review Pending', value: 'IC Review Pending' },
            { label: 'Vote Pending', value: 'Vote Pending' },
            { label: 'Approved', value: 'Approved' },
            { label: 'Rejected', value: 'Rejected' },
            { label: 'Implemented', value: 'Implemented' },
          ],
        }),
        created: fields.date({ label: 'Created' }),
        updated: fields.date({ label: 'Last Updated' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: 'public/assets/xips',
            publicPath: '/assets/xips/',
          },
        }),
      },
    }),
    irs: collection({
      label: 'IRs',
      slugField: 'filename',
      path: 'content/irs/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 1 } },
        }),
        filename: fields.text({
          label: 'Filename',
          validation: { length: { min: 1 } },
        }),
        ir: fields.integer({
          label: 'IR Number',
        }),
        author: fields.text({
          label: 'Author(s)',
          description: 'e.g name (@github), name (@github)',
          validation: { length: { min: 1 } },
        }),
        status: fields.select({
          label: 'Status',
          defaultValue: 'Draft',
          options: [
            { label: 'Draft', value: 'Draft' },
            { label: 'Vote Pending', value: 'Vote Pending' },
            { label: 'Approved', value: 'Approved' },
            { label: 'Rejected', value: 'Rejected' },
            { label: 'Implemented', value: 'Implemented' },
          ],
        }),
        created: fields.date({ label: 'Created' }),
        dependencies: fields.text({
          label: 'Dependencies',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: 'public/assets/irs',
            publicPath: '/assets/irs/',
          },
        }),
      },
    }),
  },
});
