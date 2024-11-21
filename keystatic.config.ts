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
        id: fields.integer({
          label: 'XIP Number',
          description: 'The ID of this proposal',
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
            { label: 'Parameter Change', value: 'parameter-change' },
            { label: 'Community', value: 'community' },
          ],
        }),
        network: fields.text({
          label: 'Network(s)',
          description: 'e.g Base, Optimism, Ethereum, Solana, etc',
        }),
        status: fields.select({
          label: 'Status',
          defaultValue: 'Draft',
          options: [
            { label: 'Draft', value: 'Draft' },
            { label: 'In Review', value: 'In Review' },
            { label: 'Vote In Progress', value: 'Vote In Progress' },
            { label: 'Approved', value: 'Approved' },
            { label: 'Implemented', value: 'Implemented' },
            { label: 'Rejected', value: 'Rejected' },
            { label: 'Superseded', value: 'Superseded' },
          ],
        }),
        supersededby: fields.text({
          label: 'Superseded by',
          description: 'e.g XIP-12',
        }),
        created: fields.date({ label: 'Created' }),
        updated: fields.date({ label: 'Last Updated' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/xips',
              publicPath: '/assets/xips/',
            },
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
        id: fields.integer({
          label: 'IR Number',
          description: 'The ID of this proposal',
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
        updated: fields.date({ label: 'Last Updated' }),
        dependencies: fields.text({
          label: 'Dependencies',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/irs',
              publicPath: '/assets/irs/',
            },
          },
        }),
      },
    }),
    wgcs: collection({
      label: 'WGCs',
      slugField: 'filename',
      path: 'content/wgcs/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        filename: fields.text({
          label: 'Filename',
          validation: { length: { min: 1 } },
        }),
        id: fields.integer({
          label: 'WGC Number',
          description: 'The ID of this proposal',
        }),
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 1 } },
        }),
        wgName: fields.text({
          label: 'WG Name',
          description: 'Name of the working group',
        }),
        wgLead: fields.text({
          label: 'WG Lead',
          description: 'e.g name (@github)',
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
            { label: 'Dissolved', value: 'Dissolved' },
          ],
        }),
        budget: fields.text({
          label: 'Budget',
          description: 'Value (eg, 40,000 SUSD)',
        }),
        budgetCadence: fields.text({
          label: 'Budget Cadence',
          description: 'Cadence (eg, monthly)',
        }),
        timeline: fields.text({
          label: 'Timeline',
          description:
            'Length of the working group (eg, 4 months, indefinetly, etc)',
        }),
        created: fields.date({ label: 'Created' }),
        updated: fields.date({ label: 'Updated' }),
        established: fields.date({ label: 'Established' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/wgcs',
              publicPath: '/assets/wgcs/',
            },
          },
        }),
      },
    }),
    rcs: collection({
      label: 'RCs',
      slugField: 'filename',
      path: 'content/rcs/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        filename: fields.text({
          label: 'Filename',
          validation: { length: { min: 1 } },
        }),
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 1 } },
        }),
        id: fields.integer({
          label: 'RC Number',
          description: 'The ID of this proposal',
        }),
        wg: fields.text({
          label: 'Associated WG',
          description: 'WG which implemented these changes',
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
            { label: 'Reverted', value: 'Reverted' },
          ],
        }),
        created: fields.date({ label: 'Created' }),
        updated: fields.date({ label: 'Updated' }),
        implemented: fields.date({ label: 'Implemented' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/rcs',
              publicPath: '/assets/rcs/',
            },
          },
        }),
      },
    }),
    tas: collection({
      label: 'TAs',
      slugField: 'filename',
      path: 'content/tas/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        filename: fields.text({
          label: 'Filename',
          validation: { length: { min: 1 } },
        }),
        id: fields.integer({
          label: 'TA Number',
          description: 'The ID of this proposal',
        }),
        title: fields.text({
          label: 'Title',
          validation: { length: { min: 1 } },
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
            { label: 'Implemented', value: 'Implemented' },
          ],
        }),
        created: fields.date({ label: 'Created' }),
        updated: fields.date({ label: 'Updated' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/tas',
              publicPath: '/assets/tas/',
            },
          },
        }),
      },
    }),
  },
});
