import {RemoteManifestInfoFsLayerInterface} from './remote-manifest-info-fs-layer.interface';
import {RemoteManifestInfoSignaturesInterface} from './remote-manifest-info-signatures.interface';
import {RemoteManifestInfoHistoryDataInterface} from './remote-manifest-info-history-data.interface';

export interface RemoteManifestInfoInterface {
  schemaVersion: string;
  name: string;
  tag: string;
  architecture: string;
  fsLayers: RemoteManifestInfoFsLayerInterface[];
  history: RemoteManifestInfoHistoryDataInterface[];
  signature: RemoteManifestInfoSignaturesInterface[];
}
